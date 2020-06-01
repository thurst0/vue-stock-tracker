import faker from 'faker';
import { shallowMount } from '@vue/test-utils';
import Login from '@/components/Login.vue';
import sessionService from '@/services/session';

describe('Login.vue', () => {
  let sessionServiceMock: any;
  beforeEach(() => {
    sessionServiceMock = jest.fn();
    sessionService.createSession = sessionServiceMock;
    sessionService.getSession = jest.fn();
  });

  it('creates a session with the input user name and password on login', async () => {
    const push = jest.fn();
    const wrapper = shallowMount(Login, {
      mocks: {
        $route: {},
        $router: {
          push,
        },
      },
    });
    const userName = faker.random.word();
    const pw = faker.random.word();

    wrapper.find('#user-name').setValue(userName);
    wrapper.find('#password').setValue(pw);
    const button = wrapper.find('#btn-login');
    await button.trigger('click');
    expect(sessionServiceMock).toHaveBeenLastCalledWith({
      userName,
      pw,
    });
  });

  it('navigates to home on successful login', async () => {
    const push = jest.fn();
    const wrapper = shallowMount(Login, {
      mocks: {
        $route: {},
        $router: {
          push,
        },
      },
    });

    const userName = faker.random.word();
    const pw = 'abc123';

    wrapper.find('#user-name').setValue(userName);
    wrapper.find('#password').setValue(pw);
    const button = wrapper.find('#btn-login');
    await button.trigger('click');
    expect(push).toHaveBeenCalledWith({ name: 'Home' });
  });

  it('does not navigate on failed login attempt', async () => {
    sessionServiceMock.mockRejectedValue(new Error('Invalid login'));
    const push = jest.fn();
    const wrapper = shallowMount(Login, {
      mocks: {
        $route: {},
        $router: {
          push,
        },
      },
    });

    const userName = faker.random.word();
    const pw = 'sdfg';

    wrapper.find('#user-name').setValue(userName);
    wrapper.find('#password').setValue(pw);
    const button = wrapper.find('#btn-login');
    await button.trigger('click');
    expect(push).toHaveBeenCalledTimes(0);
  });
});
