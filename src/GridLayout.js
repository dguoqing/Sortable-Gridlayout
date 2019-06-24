import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
// const originalLayouts = getFromLS("layouts") || {};

/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */
class ResponsiveLocalStorageLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // getFromLS 增加参数name
      layouts: JSON.parse(JSON.stringify(getFromLS("layouts" , this.props.layoutsName) || {}))
    };

  }

  static get defaultProps() {
    return {
      className: "layout",
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      rowHeight: 30
    };
  }

  resetLayout() {
    this.setState({ layouts: {} });
  }

  // 重新加载
  reload(){
    console.log( this.props.layoutsName )

    this.setState({
      // getFromLS 增加参数name
      layouts: JSON.parse(JSON.stringify(getFromLS("layouts" , this.props.layoutsName) || {}))
    })

  }

  onLayoutChange(layout, layouts) {
      // saveToLS 增加参数name
    saveToLS("layouts" ,layouts , this.props.layoutsName);
    this.setState({ layouts });
  }



componentDidUpdate(nextProps, nextState){
  const oldValue = this.props.layoutsName +'_'+ this.props.layoutsIndex
  const newValue = nextProps.layoutsName +'_'+ nextProps.layoutsIndex
  if (oldValue != newValue){
    this.reload()
  }
}


  render() {
    return (
      <div>
        <button onClick={() => this.resetLayout()}>Reset </button>
        <button onClick={() => this.reload()}>reload </button>

        <ResponsiveReactGridLayout
          className="layout"
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
          layouts={this.state.layouts}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }
        >
          <div key="1" data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
            <span className="text">11 name ->>> {this.props.layoutsName} {this.props.layoutsIndex} </span>
          </div>
          <div key="2" data-grid={{ w: 2, h: 3, x: 2, y: 0, minW: 2, minH: 3 }}>
            <span className="text">2</span>
          </div>
          <div key="3" data-grid={{ w: 2, h: 3, x: 4, y: 0, minW: 2, minH: 3 }}>
            <span className="text">3</span>
          </div>
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

function getFromLS(key, name) {
  console.log("getFromLS",name)

  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8" + name)) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value , name) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8" + name,
      JSON.stringify({
        [key]: value
      })
    );
  }
}




// module.exports = ResponsiveLocalStorageLayout;
export default ResponsiveLocalStorageLayout;

