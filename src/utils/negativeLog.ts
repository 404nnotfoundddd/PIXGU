/**
 * Logs a message with a negative color scheme
 */
export const negativeLog = (text: string[] | string, ...rest: any) =>
  console.log(
    `%c${typeof text === 'string' ? text : text.join(' ')}`,
    'color: #61112d; font-weight: 800; background-color: #bf265c; border-radius: 0.2rem; padding-left: 0.4rem; padding-right: 0.4rem;  padding-top: 0.15rem;  padding-bottom: 0.15rem;',
    ...rest,
  )
