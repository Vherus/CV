import tsIcon from '../../assets/icons/ts.png'
import Directory from '../menu/Directory'
import File from '../menu/File'
import FileExplorer from '../menu/FileExplorer'
import './sidebar.css'

export default function Sidebar() {
  return (
    <aside className="drawer-side">
      <FileExplorer>
        <label htmlFor="drawer-toggle" aria-label="close sidebar" className="drawer-overlay lg:hidden">Close</label>

        <Directory header='src'>
          <File icon={<img src={tsIcon} />} label='experience.ts' linkTo='/' />
          <File icon={<img src={tsIcon} />} label='about.ts' linkTo='/about' />
        </Directory>
      </FileExplorer>
    </aside>
  )
}