import moment from 'moment';
import store from '../../store';
import { Logger } from '../logger';

const logger = new Logger();

export async function createSession({
  userName,
  pw,
}: {
  userName: string;
  pw: string;
}): Promise<any> {
  // TODO: validate password, and generate token if valid
  const token = 'fixme';
  if (pw === 'abc123') {
    logger.info('saving session', userName);
    return store.dispatch('createSession', {
      userName,
      token,
      expirationDate: moment()
        .utc()
        .add(30, 'minutes')
        .calendar(),
    });
  }
  throw new Error('Login invalid');
}

export async function getSession() {
  logger.info('loading session');
  return store.getters.getSession();
}

export default {
  createSession,
  getSession,
};
