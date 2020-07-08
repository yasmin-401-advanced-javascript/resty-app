import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../component/form/main.js';

describe('<Form/>', () => {
  it('is alive at application start', () => {
      const form = shallow(<Form />);
      expect(form.find('main form legend #url').exists()).toBeTruthy();
  });
  it('Does it properly store the users input into state?', () => {
      const form = mount(<Form />);
      const input = form.find('main form legend #url');
      const input2 = form.find('main form .method #get');
      input.simulate('change', { target: { value: 'localhoast://3000' } });
      input2.simulate('change', { target: { value: 'get' } });
      const myForm = form.find('main form');
      myForm.simulate('submit');
      console.log(form.state());
      expect(form.state().url).toBe('localhoast://3000');
  });
  it('Does it properly display the users input in the output area on form submit?', () => {
      const form = mount(<Form />);
      const input = form.find('main form legend #url');
      const input2 = form.find('main form .method #get');
      input.simulate('change', { target: { value: 'localhoast://3000' } });
      input2.simulate('change', { target: { value: 'GET' } });
      const myForm = form.find('main form');
      myForm.simulate('submit');
      const div2 = form.find('main .pragraph .results .url')
      expect(div2.text()).toBe("URL: ''");
  });
  it('Does it properly clear the form/state after the form is submitted?', () => {
      const form = mount(<Form />);
      const input = form.find('main form legend #url');
      const input2 = form.find('main form .method #get');
      input.simulate('change', { target: { value: '' } });
      input2.simulate('change', { target: { value: '' } });
      const myForm = form.find('main form');
      myForm.simulate('submit');
      expect(form.state().url).toBe('');
      expect(form.state().method).toBe('');
  });
});