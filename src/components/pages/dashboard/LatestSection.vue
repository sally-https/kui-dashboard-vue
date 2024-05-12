<script setup>
import BaseCard from '@/components/BaseCard.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
    <section>
        <!-- Recent cards -->
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
            <!-- Recent transactions -->
            <BaseCard title="Recently Borrowed Books">
                <div class="mt-4 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <Icon
                            icon="mdi:minus-circle-outline"
                            aria-hidden="true"
                            class="w-6 h-6 text-red-500"
                        />
                        <div>
                            <h5
                                class="text-xs text-gray-600 dark:text-gray-300"
                            >
                                IBM
                            </h5>
                            <p class="text-xs text-gray-400 dark:text-gray-500">
                                01 Oct, 2021
                            </p>
                        </div>
                    </div>

                    <span class="text-base font-medium text-red-500"
                        >-$254.00</span
                    >
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <Icon
                            icon="mdi:minus-circle-outline"
                            aria-hidden="true"
                            class="w-6 h-6 text-red-500"
                        />
                        <div>
                            <h5
                                class="text-xs text-gray-600 dark:text-gray-300"
                            >
                                WIRE
                            </h5>
                            <p class="text-xs text-gray-400 dark:text-gray-500">
                                01 Oct, 2021
                            </p>
                        </div>
                    </div>

                    <span class="text-base font-medium text-red-500"
                        >-$254.00</span
                    >
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <Icon
                            icon="mdi:minus-circle-outline"
                            aria-hidden="true"
                            class="w-6 h-6 text-red-500"
                        />
                        <div>
                            <h5
                                class="text-xs text-gray-600 dark:text-gray-300"
                            >
                                SAT
                            </h5>
                            <p class="text-xs text-gray-400 dark:text-gray-500">
                                01 Oct, 2021
                            </p>
                        </div>
                    </div>

                    <span class="text-base font-medium text-red-500"
                        >-$254.00</span
                    >
                </div>
            </BaseCard>

            <BaseCard title="Recently Returned Books">
                <div class="mt-4 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <Icon
                            icon="mdi:plus-circle-outline"
                            aria-hidden="true"
                            class="w-6 h-6 text-green-500"
                        />
                        <div>
                            <h5
                                class="text-xs text-gray-600 dark:text-gray-300"
                            >
                                GilletteS
                            </h5>
                            <p class="text-xs text-gray-400 dark:text-gray-500">
                                17 Oct, 2021
                            </p>
                        </div>
                    </div>

                    <span class="text-base font-medium text-green-500"
                        >+$360.00</span
                    >
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <Icon
                            icon="mdi:plus-circle-outline"
                            aria-hidden="true"
                            class="w-6 h-6 text-green-500"
                        />
                        <div>
                            <h5
                                class="text-xs text-gray-600 dark:text-gray-300"
                            >
                                RAZOR
                            </h5>
                            <p class="text-xs text-gray-400 dark:text-gray-500">
                                17 Oct, 2021
                            </p>
                        </div>
                    </div>

                    <span class="text-base font-medium text-green-500"
                        >+$360.00</span
                    >
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <Icon
                            icon="mdi:plus-circle-outline"
                            aria-hidden="true"
                            class="w-6 h-6 text-green-500"
                        />
                        <div>
                            <h5
                                class="text-xs text-gray-600 dark:text-gray-300"
                            >
                                LAYER
                            </h5>
                            <p class="text-xs text-gray-400 dark:text-gray-500">
                                17 Oct, 2021
                            </p>
                        </div>
                    </div>

                    <span class="text-base font-medium text-green-500"
                        >+$360.00</span
                    >
                </div>
            </BaseCard>
        </div>
    </section>
</template>
