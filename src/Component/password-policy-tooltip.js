import React from "react";
import en from '../i18n/en.json';

const PasswordPolicyTooltip = () => {
    const data = en.PASSWORD_RULES;
    const passwordRules = data.map((item, key) => {
        const submenu = item.policylist && item.policylist.length && item.policylist.map((subItem, key) => {
            return (
                <li key={key}>{subItem.name}</li>
            )
        })
        return (
            <li key={key}>{item.name}
                {submenu && submenu.length ? <ul>{submenu}</ul> : null}
            </li>
        )
    })

    return (

        <div className="tooltip">
            {en.PASSWORD_POLICY}
            <div className="tooltiptext">
                <h3>{en.PASSWORD_POLICY}</h3>
                <ul>
                    {passwordRules}
                </ul>
            </div>
        </div>
    )
}



export default PasswordPolicyTooltip;