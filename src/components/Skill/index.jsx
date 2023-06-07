import './skill.css'

export default function Skill({ name, time }) {
  return (
    <div className='app__skill flex__center'>
      <h2>{name}</h2>
      <p>{`${time} Experience`}</p>
    </div>
  )
}
