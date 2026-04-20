// utils/RouteManager.ts
import { CONSTANTS } from './constants';

export class RouteManager {

    static getBaseUrl() {
        return CONSTANTS.URLS.BASE;
    }

    static build(path: string): string {
        return `${CONSTANTS.URLS.BASE}${path}`;
    }

    static dashboardUrl(): string {
        return this.build(CONSTANTS.PATH.dashboard);
    }

    static loginUrl(): string {
        return this.build(CONSTANTS.PATH.loginPage);
    }

    static dashboardRegex(): RegExp {
        return /\/admin\/dashboard/;
    }
}