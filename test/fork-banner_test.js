import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ForkBanner from '../src/js/components/fork-banner';

function setup() {
  let props = {
    addTodo: expect.createSpy()
  }

  let renderer = TestUtils.createRenderer()
  renderer.render(<ForkBanner {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('components', () => {
  describe('ForkBanner', () => {
    it('should render correctly', () => {
      const { output } = setup()

      expect(output.type).toBe('a')
      expect(output.props.className).toBe('fork-me')

      let img  = output.props.children

      expect(img.type).toBe('img')
    })

  })
})
