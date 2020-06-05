import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

declare global {
  interface Date {
    formatDate: (_format) => string;
  }
}

Date.prototype.formatDate = function() : string {
  return format(this, 'dd MMMM yyyy', {locale: ru})
};