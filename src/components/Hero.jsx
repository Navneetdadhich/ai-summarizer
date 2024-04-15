import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="" className='w-10 object-contain'/>
        

        <button 
        type='button'
        onClick={() => {window.open('https://github.com/Nvntdad/ai-summarizer')}}
        className='black_btn'
        >
          Github
        </button>
        </nav>

        <h1 className='head_text '>
          Summarize your articles with<br />
          <span className='orange_gradient'>
             OpenAI GPT-4
            </span> 
        </h1>
        <h2 className='desc'>
          summarize your lengthy articles into short summarized articles.
        </h2>
    </header>
  )
}

export default Hero