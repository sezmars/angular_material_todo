import * as moment from 'moment';
export class TodoBase {
  public id: number;
  public title: string;
  public complete?: boolean;
  public date: moment.Moment = moment( 'YYYY-MM-DD HH:mm');
  public timeSend?: moment.Moment = moment('YYYY-MM-DD HH:mm');
}
