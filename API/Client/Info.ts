/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface Info {

        /**
         * the server version
         */
        "version": number;

        /**
         * the protocol version
         */
        "protocolversion": number;

        /**
         * the wallet version
         */
        "walletversion": number;

        /**
         * the total syscoin balance of the wallet
         */
        "balance": number;

        /**
         * the current number of blocks processed in the server
         */
        "blocks": number;

        /**
         * the time offset
         */
        "timeoffset": number;

        /**
         * the number of connections
         */
        "connections": number;

        /**
         * the proxy used by the server
         */
        "proxy": string;

        /**
         * the current difficulty
         */
        "difficulty": number;

        /**
         * if the server is using testnet or not
         */
        "testnet": boolean;

        /**
         * the timestamp (seconds since GMT epoch) of the oldest pre-generated key in the key pool
         */
        "keypoololdest": number;

        /**
         * how many new keys are pre-generated
         */
        "keypoolsize": number;

        /**
         * the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked
         */
        "unlockedUntil": number;

        /**
         * the transaction fee set in SYS/kB
         */
        "paytxfee": number;

        /**
         * minimum relay fee for non-free transactions in SYS/kB
         */
        "relayfee": number;

        /**
         * any error messages
         */
        "errors": string;
    }

}
