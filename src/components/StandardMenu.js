import React from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'

class StandardMenu extends React.Component {

    render() {
        //const props = this.props
        return (
            <div className="StandardMenu">
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Breakfast</Table.HeaderCell>
                            <Table.HeaderCell>Lunch</Table.HeaderCell>
                            <Table.HeaderCell>Dinner</Table.HeaderCell>
                            <Table.HeaderCell>Midnight snack</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>whole milk</Table.Cell>
                            <Table.Cell>Red tiaoxi porridge</Table.Cell>
                            <Table.Cell>Rice noodles with pork and pickled cabbage</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>

                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>

                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>

                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>

                        </Table.Row>
                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron left' />
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as='a'>5</Menu.Item>
                                    <Menu.Item as='a'>6</Menu.Item>
                                    <Menu.Item as='a'>7</Menu.Item>

                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron right' />
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </div>
        )
    }
}
export default StandardMenu