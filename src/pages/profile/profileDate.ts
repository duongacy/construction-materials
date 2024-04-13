import moment from 'moment';
export function profileDate(date: string) {
  const rs = moment(date).format('MMM YYYY');
  if (rs === moment().format('MMM YYYY')) {
    return 'Present';
  }
  return rs;
}
