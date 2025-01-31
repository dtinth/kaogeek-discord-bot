import { Client, Collection } from 'discord.js'

import { RuntimeConfiguration } from '../utils/RuntimeConfiguration.js'

import { CommandHandlerConfig } from './CommandHandlerConfig.js'

/**
 * A shared context object that is passed to all command handlers.
 */
export interface BotContext {
  /**
   * A Discord.js client instance.
   */
  readonly client: Client

  /**
   * A collection of registered command handlers.
   */
  readonly commands: Collection<string, CommandHandlerConfig>

  /**
   * Access runtime configuration.
   */
  readonly runtimeConfiguration: RuntimeConfiguration
}
