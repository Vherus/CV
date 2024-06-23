import tsIcon from '../../assets/icons/ts.png'
import './styles/tabBar.css'
import Tab from './tabBar/Tab'

export default function TabBar() {
  return (
    <section className="navbar bg-grey-darker p-0 tab-bar min-h-2">
      <ul className="h-full">
        <Tab icon={<img src={tsIcon} />} label='experience.ts' linkTo='/' />
        <Tab icon={<img src={tsIcon} />} label='about.ts' linkTo='/about' />
      </ul>
    </section>
  )
}