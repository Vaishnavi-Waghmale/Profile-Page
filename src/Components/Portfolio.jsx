import React, { Component } from 'react'



class Portfolio extends Component {
    render() {
        return (

            <section className="projects">

                <div className="tableview">
                    <table className='center'>

                        <thead>
                            <tr>
                                <th width="25%">Sr.No.</th>
                                <th width="45%">Company Name</th>
                                <th width="30%">Company Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Company1</td>
                                <td><a href="#home">Link1</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Company2</td>
                                <td><a href="#home">Link2</a></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Company3</td>
                                <td><a href="#home">Link3</a></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Company4</td>
                                <td><a href="#home">Link4</a></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Company5</td>
                                <td><a href="#home">Link5</a></td>
                            </tr>

                        </tbody>
                    </table>
                </div>


            </section>
        )
    }
}

export default Portfolio


