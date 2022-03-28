/**
 * An event listener.
 */
export interface IEventListener {
  /**
   * The name of the event to listen to.
   */
  eventName: string;

  /**
   * The callback to invoke when the event is fired.
   */
  callback: VoidFunction | (() => Promise<void>);
}
