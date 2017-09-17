import { InfoLine, Heart } from './styles'
import Twitter from './twitter'

const Info = () => (
  <InfoLine>
    <div>
      <span>Made with </span>
      <Heart>❤ </Heart>
      <span>by </span>
      <a href="http://www.juancaicedo.com/">Juan Caicedo</a>
    </div>
    <a href="https://twitter.com/_juancaicedo/">
      <Twitter />
    </a>
    <div>
      <span>Fork or suggest edits on </span>
      <a href="https://github.com/JuanCaicedo/speed-coder">GitHub</a>
    </div>
  </InfoLine>
)

export default Info
