import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
            <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' , padding:'4px',margin:'2PX'}}>
                    <div>
                    <a href="https://javaguides.net" className="navbar-brand">
                        Employee Management Application
                    </a>
                    </div>
                    <div style={{ display: 'flex', gap: '20px'  }}>
                        <a href="#add-emp" className="navbar-brand" style={{ fontSize: '15px' }}>AddEmp</a>
                        <a href="#view-all-emp" className="navbar-brand" style={{ fontSize: '15px' }}>View AllEmp</a>
                        <a href="#login" className="navbar-brand" style={{ fontSize: '15px' }}>Login</a>
                    </div>
                </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent
