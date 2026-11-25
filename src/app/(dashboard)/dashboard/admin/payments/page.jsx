'use client';

import { useEffect, useState } from 'react';
import { CreditCard, Loader2, ShieldCheck } from 'lucide-react';
import Swal from 'sweetalert2';
import { getAdminGatewaysApi, switchGatewayApi } from '@/lib/action/payment';

export default function AdminPaymentsPage() {
    const [activeGateway, setActiveGateway] = useState('');
    const [gateways, setGateways] = useState([]);
    const [loading, setLoading] = useState(true);
    const [switching, setSwitching] = useState('');

    const loadGateways = async () => {
        const res = await getAdminGatewaysApi();
        setActiveGateway(res?.activeGateway || '');
        setGateways(Array.isArray(res?.gateways) ? res.gateways : []);
    };

    useEffect(() => {
        let ignore = false;
        (async () => {
            try {
                const res = await getAdminGatewaysApi();
                if (ignore) return;
                setActiveGateway(res?.activeGateway || '');
                setGateways(Array.isArray(res?.gateways) ? res.gateways : []);
            } catch (error) {
                if (!ignore) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Could not load gateways',
                        text: error.response?.data?.message || 'Please try again.',
                        confirmButtonColor: '#2563EB',
                    });
                }
            } finally {
                if (!ignore) setLoading(false);
            }
        })();
        return () => {
            ignore = true;
        };
    }, []);

    const switchGateway = async (gateway) => {
        const result = await Swal.fire({
            title: `Use ${gateway.label}?`,
            text: 'New checkouts will use this gateway. Payments that already started stay on the gateway they began with.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Switch gateway',
            cancelButtonText: 'Keep current',
            confirmButtonColor: '#2563EB',
        });
        if (!result.isConfirmed) return;

        setSwitching(gateway.name);
        try {
            const res = await switchGatewayApi(gateway.name);
            setActiveGateway(res?.activeGateway || gateway.name);
            await loadGateways();
            Swal.fire({
                icon: 'success',
                title: 'Gateway updated',
                text: 'New service payments will use this gateway.',
                confirmButtonColor: '#2563EB',
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Switch failed',
                text: error.response?.data?.message || 'This gateway could not be activated.',
                confirmButtonColor: '#2563EB',
            });
        } finally {
            setSwitching('');
        }
    };

    if (loading) {
        return (
            <div className="flex min-h-[40vh] items-center justify-center">
                <Loader2 className="h-6 w-6 animate-spin text-cyan-500" />
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                    Payment gateways
                </h1>
                <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
                    Choose which gateway collects money for new orders. A developer adds a new gateway in code. This page only selects the active one.
                </p>
            </div>

            <div className="mb-6 flex items-start gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-sm text-slate-700 dark:text-slate-300">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
                <p>
                    New checkouts use the gateway you select. Payments already started stay on their own gateway until they finish.
                </p>
            </div>

            {gateways.length === 0 && (
                <p className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                    No payment gateways are registered.
                </p>
            )}

            <div className="grid gap-4">
                {gateways.map((gateway) => {
                    const active = gateway.name === activeGateway;
                    const unavailable = gateway.configured === false;
                    return (
                        <article
                            key={gateway.name}
                            className={`rounded-2xl border p-5 ${active
                                ? 'border-cyan-500 bg-cyan-500/5'
                                : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
                                }`}
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                                        <CreditCard className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                                            {gateway.label}
                                        </h2>
                                        <p className="text-xs uppercase tracking-wider text-slate-500">
                                            {gateway.name}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    {active && (
                                        <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300">
                                            Active
                                        </span>
                                    )}
                                    {unavailable && (
                                        <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
                                            Not configured
                                        </span>
                                    )}
                                    <button
                                        type="button"
                                        disabled={active || unavailable || switching === gateway.name}
                                        onClick={() => switchGateway(gateway)}
                                        title={unavailable ? "Add this gateway's keys in the server environment, then restart the server." : undefined}
                                        className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-slate-900"
                                    >
                                        {switching === gateway.name ? 'Switching...' : active ? 'Current' : 'Make active'}
                                    </button>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}
