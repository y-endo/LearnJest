import { mount } from '@vue/test-utils';
import Counter from './index';

describe('Counter', () => {
  const wrapper = mount(Counter);

  it('描画されるマークアップが正しい', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>');
  });

  it('ボタンタグを持っている', () => {
    expect(wrapper.contains('button')).toBe(true);
  });

  it('ボタンをクリックしたときにカウントがインクリメントされる', () => {
    // dataのcountが0
    expect(wrapper.vm.count).toBe(0);

    // buttonをインスタンスから探す
    const button = wrapper.find('button');

    // buttonのクリックイベントを発火
    button.trigger('click');

    // buttonのクリックハンドラでインクリメントが実行されたか確認
    // dataのcountが1になっていることを期待
    expect(wrapper.vm.count).toBe(1);
  });
});
