import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '0865127521d148b09e26f7ccb6a256ad'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '381ac8d269a44a45b42de763d3d5701d'
                    }
                }
            }
        }
    }
}
