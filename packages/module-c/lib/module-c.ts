import moduleA from '@rbarbazz/module-a'
import moduleB from '@rbarbazz/module-b'

const moduleC = () => {
  moduleA()
  moduleB()
  console.log('module-c')
}

moduleC()
export default moduleC
