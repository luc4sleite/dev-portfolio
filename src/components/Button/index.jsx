import './button.css'

export default function Button({ name, url }) {
  return (
    <button type='button' className='app__button'>
      <a href={url}>{name}</a>
    </button>
  )
}
