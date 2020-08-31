/**
 * 界面变量
*/
import React, { ReactElement, PureComponent } from 'react'
import { Tabs, Card, Table, Tooltip, Tag } from 'antd'
import { TYPE_DATA_TAG } from '../../config'
const { TabPane } = Tabs
import "./index.less"
import { IVariableData } from '../../interface'

interface IProps {
  variableData: IVariableData[];
  onClick: (val: string) => void;
}

interface IState {
  visible: boolean;
  activeKey: string;
}
interface IColumns {
  title: string;
  dataIndex: string;
  key: string;
  render?: (text: string, record: any, index: number) => ReactElement;
}
class Variable extends PureComponent<IProps, IState> {
  private columns: IColumns[] = [
    {
      title: '参数名',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: "参数类型",
      dataIndex: "type",
      key: "type",
      render: (text: string, record: any, index: number) => {
        const { type = "其他", color = "lime" } = TYPE_DATA_TAG[Object.prototype.toString.call(record.value)]
        return (<div key={index} className="">
          <Tag className="" color={color}>{type}</Tag>
        </div>)
      }
    }, {
      title: '参数值',
      dataIndex: 'value',
      key: 'value',
      render: (text: string, record: any, index: number) => (
        <div key={index} className="func-table-col">
          <Tooltip placement="topLeft" title={text}><span className="func-table-text">{text}</span></Tooltip>
          <a>编辑</a>
        </div>)
    }
  ]
  static defaultProps = {
    variableData: [],
  }
  constructor(props: IProps) {
    super(props)
    this.state = {
      activeKey: props.variableData[0]?.key,
      visible: false
    }
  }
  componentDidUpdate(prevProps: IProps) {

  }
  public handleTabsChange = (activeKey: string) => {
    this.setState({ activeKey })
  }
  public handleCancel = () => {
    this.setState({
      visible: false
    })
  }
  public clickTable = (record: any) => {
    const { key, title } = record
    this.props.onClick && this.props.onClick(title || key)
  }
  public renderTabPane = (): ReactElement => {
    const { variableData } = this.props
    return (
      <>
        {
          variableData.map((item) => {
            const { props, title, key } = item
            return (
              <TabPane tab={title} key={key}>
                <Table
                  showHeader={false}
                  dataSource={props}
                  columns={this.columns}
                  size="small"
                  pagination={false}
                  locale={{
                    emptyText: "未获取到函数任何参数"
                  }}
                  onRow={
                    record => {
                      return {
                        onClick: e => this.clickTable(record)
                      }
                    }
                  }
                />
              </TabPane>
            )
          })
        }
      </>
    )

  }
  render() {
    const { activeKey } = this.state
    return (
      <>
        <div className="variable">
          <Card title="可用变量" >
            <Tabs
              onChange={this.handleTabsChange}
              activeKey={activeKey}>
              {this.renderTabPane()}
            </Tabs>
          </Card>
        </div>
      </>
    )
  }
}
export default Variable
