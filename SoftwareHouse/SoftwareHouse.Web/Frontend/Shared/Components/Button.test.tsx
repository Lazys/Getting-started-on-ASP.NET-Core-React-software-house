import * as React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

describe('Button component', () => {

    it('should contain <a> tag when used as a link', () => {
        const wrapper = shallow(<Button link={true}/>);
        expect(wrapper.find('a')).toHaveLength(1);
    });

    it('should contain <button> tag when used as a button', () => {
        const wrapper = shallow(<Button link={false} />);
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should be possible to set href in link mode', () => {
        const wrapper = shallow(<Button link={true} href={'www.poznajprogramowanie.pl'} />);
        expect(wrapper.find('[href="www.poznajprogramowanie.pl"]')).toHaveLength(1);
    });

    it('should use hash in case of missing href', () => {
        const wrapper = shallow(<Button link={true} />);
        expect(wrapper.find('[href="#"]')).toHaveLength(1);
    });

    it('should omit href if passed in button mode', () => {
        const wrapper = shallow(<Button link={false} href={'www.poznajprogramowanie.pl'} />);
        expect(wrapper.find('[href]')).toHaveLength(0);
    });

    it('should be possible to insert text content into link', () => {
        const wrapper = shallow(<Button link={true}>{'Test content'}</Button>);
        expect(wrapper.html()).toEqual('<a href="#" class="btn">Test content</a>');
    });

    it('should be possible to insert text content into button', () => {
        const wrapper = shallow(<Button link={false}>{'Test content'}</Button>);
        expect(wrapper.html()).toEqual('<button class="btn">Test content</button>');
    });

    it('should be rendered with at least .btn class as a link', () => {
        const wrapper = shallow(<Button link={true} />);
        expect(wrapper.html()).toEqual('<a href="#" class="btn"></a>');
    });

    it('should be rendered with at least .btn class as a button', () => {
        const wrapper = shallow(<Button link={false} />);
        expect(wrapper.html()).toEqual('<button class="btn"></button>');
    });

    it('should be possible to add extra classes in link mode', () => {
        const wrapper = shallow(<Button link={true} extraClassNames={['btn-sucess random-class']}/>);
        expect(wrapper.html()).toEqual('<a href="#" class="btn btn-sucess random-class"></a>');
    });

    it('should be possible to add extra classes in button mode', () => {
        const wrapper = shallow(<Button link={false} extraClassNames={['btn-sucess random-class']} />);
        expect(wrapper.html()).toEqual('<button class="btn btn-sucess random-class"></button>');
    });

});