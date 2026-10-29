export const SITE_NAME = 'Source Notes';
export const SITE_DESCRIPTION = 'Notes on code, systems, and the ideas behind them.';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

export const formatDate = (date: Date) => dateFormatter.format(date);

export const articleCount = (count: number) =>
  count === 1 ? '1 article' : `${count} articles`;
