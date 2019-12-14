import { mount } from '@vue/test-utils';
import VueButton from './index';

describe('VueButton', () => {
  const wrapper = mount(VueButton, {
    propsData: {
      text: 'テスト'
    }
  });

  it('props.textが正しく表示されている', () => {
    expect(wrapper.html()).toContain('<p>テスト</p>');
  });

  it('ボタンをクリックしたときにEmitが正しく行われている', () => {
    const button = wrapper.find('button');

    button.trigger('click');

    // Emit 'clicked' が発行されたか
    expect(wrapper.emitted().clicked).toBeTruthy;
  });
});
