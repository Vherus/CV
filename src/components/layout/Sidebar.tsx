import tsIcon from '../../assets/icons/ts.png'
import Directory from '../fileTree/Directory'
import File from '../fileTree/File'
import FileExplorer from '../fileTree/FileExplorer'
import './styles/sidebar.css'

export default function Sidebar() {
  return (
    <>
      <aside className="drawer-side">
        <FileExplorer>
          <label htmlFor="drawer-toggle" aria-label="close sidebar" className="drawer-overlay lg:hidden">Close</label>

          <Directory header='src'>
            <File icon={<img src={tsIcon} />} label='experience.ts' linkTo='/' />
            <File icon={<img src={tsIcon} />} label='about.ts' linkTo='/about' />
          </Directory>
        </FileExplorer>
      </aside>
    </>
  )
}