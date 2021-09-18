// Write your code here
import ConfiguarationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfiguarationContext.Consumer>
    {value => {
      const {
        showContent,
        showRightNavbar,
        showLeftNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeShowContent = event => {
        onToggleShowContent(event.target.value)
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-controller-container">
          <div className="responsive-controller-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="checkbox-group">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="content"
                  checked={showContent}
                  onChange={onChangeShowContent}
                />
                <label htmlFor="content" className="label-text">
                  Content
                </label>
                <input
                  type="checkbox"
                  id="leftNavbar"
                  checked={showLeftNavbar}
                  onChange={onChangeLeftNavbar}
                />
                <label htmlFor="leftNavbar" className="label-text">
                  Left Navbar
                </label>
                <input
                  type="checkbox"
                  id="rightNavbar"
                  checked={showRightNavbar}
                  onChange={onChangeRightNavbar}
                />
                <label htmlFor="rightNavbar" className="label-text">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfiguarationContext.Consumer>
)

export default ConfigurationController
