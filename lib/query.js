import { gql } from '@apollo/client'

export const MISSIONS = gql`
  query GetMissions {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
      }
    }
  }
`

export const ROCKETS = gql`
  query GetRockets {
    rockets {
      description
      active
      name
    }
  }
`
