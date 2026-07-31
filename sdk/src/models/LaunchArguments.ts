/**
 * Representa los argumentos con los que Stream Dock inicia un plugin.
 *
 * Esta clase es un modelo de datos. No conoce process.argv,
 * no realiza validaciones y no interactúa con WebSockets.
 */
export class LaunchArguments {
    public constructor(
        public readonly port: number,
        public readonly pluginUUID: string,
        public readonly registerEvent: string,
        public readonly info: string
    ) {}
}