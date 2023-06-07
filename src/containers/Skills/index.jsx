import Skill from '../../components/Skill'

import './skills.css'

export default function Skills() {
  return (
    <div className='app__skills flex__center'>
      <Skill name='HTML' time='2 years' />
      <Skill name='CSS' time='2 years' />
      <Skill name='JavaScript' time='2 years' />
      <Skill name='Accessibility' time='1 year' />
      <Skill name='React' time='1 year' />
      <Skill name='Tailwind CSS' time='1 year' />
    </div>
  )
}
