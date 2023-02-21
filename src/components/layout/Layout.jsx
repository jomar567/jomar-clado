import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Layout = () => {
  return (
    <div className="flex justify-center items-center">Layout
    <FontAwesomeIcon className="m-1 fs-3 text-primary" icon={brands('facebook')} />
    <FontAwesomeIcon className="m-1 fs-3 text-primary" icon={brands('linkedin')} />
    <FontAwesomeIcon className="m-1 fs-3 text-primary" icon={brands('twitter')} /></div>
  )
}

export default Layout