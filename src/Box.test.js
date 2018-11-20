import React from 'react'
import { shallow } from 'enzyme'
import Box from './Box'

describe('Box', () => {
    let component = null

    it('has a React Element', () => {
        component = shallow(<Box />)
    })

    it('matches snapshot', () => expect(component).toMatchSnapshot())

    describe('addTick()', () => {

        it('has a span', () => expect(component.find('span').exists()).toEqual(true))

        it('has a tick value', () => expect(component.find('span').text()).toEqual('0'))

        it('has a button', () => expect(component.find('button').exists()).toEqual(true))

        it('simulates button click', () => {

            component.find('button')
                    .simulate('click')


            expect(component.state().tick).toEqual(1)
            expect(component.find('span').text()).toEqual('1')

        })

    })

    describe('setText()', () => {

        it('has a input', () => expect(component.find('input').exists()).toEqual(true))

        it('has a input type', () => expect(component.find('input').props().type).toEqual('text'))
    
        it('simulates input change', () => {

            const mock = {
                target : {
                    value : 'hello'
                }
            }

            component.find('input')
                    .simulate('change', mock)


            expect(component.state().text).toEqual('hello')
            expect(component.find('input').props().value).toEqual('hello')

        })

    })    

})