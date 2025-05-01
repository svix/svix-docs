import React from 'react';

const logos = {
    slack: require('../../docs/img/connectors/logos/slack-icon.svg'),
    discord: require('../../docs/img/connectors/logos/discord-icon.svg'),
    'microsoft-teams': require('../../docs/img/connectors/logos/microsoft-teams-icon.svg'),
    hubspot: require('../../docs/img/connectors/logos/hubspot-icon.svg'),
    windmill: require('../../docs/img/connectors/logos/windmill-icon.svg'),
    sendgrid: require('../../docs/img/connectors/logos/sendgrid-icon.svg'),
    resend: require('../../docs/img/connectors/logos/resend-icon.svg'),
    loops: require('../../docs/img/connectors/logos/loops-icon.svg'),
};

export default function ConnectorLogo({ name }) {
    const Logo = logos[name.toLowerCase()]?.default;
    if (!Logo) return null;

    return (
        <div style={{
            display: "inline-block",
            width: "1em",
            height: "1em",
            objectFit: "contain",
            verticalAlign: "middle",
            marginRight: "0.2em",
            marginBottom: "4px"
        }}>
            <Logo width="100%" height="100%" />
        </div>
    );
} 