// import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'
import Title from './title'
import GreenButton from './greenButton'
import Accordion from './accordion'
import styled from 'styled-components'
import { device } from './device'

const ShowYourWorkWrapper = styled.div`
  position: relative;
  padding: 80px 20px 0 20px;
  max-width: 1240px;
  left: 50%;
  transform: translate(-50%,0);
  box-sizing: border-box;

  @media ${device.tablet} {
      padding: 120px 40px 0 40px;
      display: flex;
      flex-wrap: wrap;
  }
`

const LeftWrapper = styled.div`
  @media ${device.tablet} {
      width: 40%;
      padding-right: 56px;
      box-sizing: border-box;
  }
`

const RightWrapper = styled.div`
  @media ${device.tablet} {
      width: 60%;
      box-sizing: border-box;
  }
`

const Text = styled.div`
  margin-top: 20px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 26px;
  font-size: 16px;
  letter-spacing: 0.1px;
  color: #666666;
`

const AccordionsWrapper = styled.div`
  margin-top: 80px;
  @media ${device.tablet} {
      margin-top: 0px;
  }
`

const StyledGreenButton = styled(GreenButton)`
  @media ${device.tablet} {
      width: 165px;
      margin-top: 67px
  }
`


const ShowYourWork = () => (
  <ShowYourWorkWrapper>
    <LeftWrapper>
      <Title titleText="Show Your Work"/>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>
      <StyledGreenButton buttonText="READ MORE"/>
    </LeftWrapper>
    <RightWrapper>
      <AccordionsWrapper>
      <Accordion 
        accordionTitle="Explore Multipurpose The Me" 
        accordionText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris niesi ut aliquip ex ea commodo consequat.sed do eiusmod tempor incididunt ut exercitation ullamco laboris quis  labore et doliore magna aliqua. 1"  
        accordionIcon="M13.1294 7.49175V10.5V11.375V14H0.879375V11.375V10.5V7.35175C0.3325 6.84863 0.002625 6.0515 0 5.25H0.004375L1.75437 0H12.2544L14.0044 5.25H14.0087C14.0061 6.13462 13.7944 7.00875 13.1294 7.49175ZM1.75451 13.125H12.2545V11.375H1.75451V13.125ZM12.2545 10.5H1.75451V7.8225C1.88664 7.854 2.02139 7.875 2.16314 7.875C2.82114 7.875 3.53864 7.54513 3.94201 7C4.29551 7.53813 4.76889 7.875 5.46364 7.875C6.09014 7.875 6.64139 7.45062 7.00451 7C7.36676 7.45062 7.91889 7.875 8.54451 7.875C9.24014 7.875 9.71351 7.53813 10.067 7C10.4704 7.54513 11.1599 7.875 11.817 7.875C11.9711 7.875 12.1036 7.85496 12.2366 7.83483L12.2366 7.83483L12.2545 7.83213V10.5ZM11.6708 0.875H2.33721L1.17083 4.375H12.8372L11.6708 0.875ZM2.163 7C1.54875 7 1.03688 6.00338 0.889879 5.25H13.1189C13.1189 5.25 13.1294 7 11.8449 7C10.5044 7 10.5044 6.12587 10.5044 6.12587H9.6215C9.6215 6.12587 9.6285 7 8.5435 7C7.44188 7 7.46638 6.12587 7.46638 6.12587H6.5415C6.5415 6.12587 6.56688 7 5.4635 7C4.37938 7 4.37938 6.12587 4.37938 6.12587H3.50438C3.50438 7 2.77813 7 2.163 7Z"
      />
      <Accordion 
        accordionTitle="Create Corporate Site" 
        accordionText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris niesi ut aliquip ex ea commodo consequat.sed do eiusmod tempor incididunt ut exercitation ullamco laboris quis  labore et doliore magna aliqua. 2" 
        accordionIcon="M3.50007 11.375H12.2501C12.7331 11.375 13.1251 10.9839 13.1251 10.5V0.875C13.1251 0.391125 12.7331 0 12.2501 0H3.50007C3.01707 0 2.62507 0.391125 2.62507 0.875V10.5C2.62507 10.9839 3.01707 11.375 3.50007 11.375ZM11.8125 0.875854C12.054 0.875854 12.25 1.07185 12.25 1.31335V10.0634C12.25 10.3049 12.054 10.5009 11.8125 10.5009H3.93751C3.69601 10.5009 3.50001 10.304 3.50001 10.0634V1.31335C3.50001 1.07098 3.69601 0.875854 3.93751 0.875854H11.8125ZM10.9374 8.75088H4.81243C4.57093 8.75088 4.37493 8.55488 4.37493 8.3125C4.37493 8.071 4.57093 7.875 4.81243 7.875H10.9374C11.1789 7.875 11.3749 8.071 11.3749 8.3125C11.3749 8.55488 11.1789 8.75088 10.9374 8.75088ZM4.81243 6.125H10.9374C11.1789 6.125 11.3749 5.929 11.3749 5.6875C11.3749 5.446 11.1789 5.25 10.9374 5.25H4.81243C4.57093 5.25 4.37493 5.446 4.37493 5.6875C4.37493 5.929 4.57093 6.125 4.81243 6.125ZM8.31243 3.5H4.81243C4.57093 3.5 4.37493 3.30487 4.37493 3.0625C4.37493 2.82013 4.57093 2.625 4.81243 2.625H8.31243C8.55393 2.625 8.74993 2.821 8.74993 3.0625C8.74993 3.304 8.55393 3.5 8.31243 3.5ZM1.75 13.1259H11.375C11.858 13.1259 12.25 12.7339 12.25 12.25H1.75V1.75085C1.267 1.75085 0.875 2.14285 0.875 2.62585V12.2509C0.875 12.7339 1.267 13.1259 1.75 13.1259Z"
      />
      <Accordion 
        accordionTitle="Star Publishing Blog" 
        accordionText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris niesi ut aliquip ex ea commodo consequat.sed do eiusmod tempor incididunt ut exercitation ullamco laboris quis  labore et doliore magna aliqua. 3" 
        accordionIcon="M13.125 9.62588V11.5701C13.6579 11.0889 14 10.3994 14 9.625V2.625C14 1.176 12.8249 0 11.375 0H4.37498C3.60061 0 2.91198 0.342125 2.43161 0.875H11.375V0.875875C12.341 0.875875 13.125 1.659 13.125 2.625V9.625V9.62588ZM12.25 4.375C12.25 2.926 11.0749 1.75 9.625 1.75H2.625C1.17513 1.75 0 2.926 0 4.375V5.25V6.125V11.375C0 12.8249 1.17513 14 2.625 14H9.625C11.0749 14 12.25 12.8249 12.25 11.375V6.125V5.25V4.375ZM0.874857 11.375C0.874857 12.341 1.65886 13.125 2.62486 13.125H9.62486C10.5909 13.125 11.3749 12.341 11.3749 11.375V6.125H0.874857V11.375ZM0.874857 5.25V4.375C0.874857 3.409 1.65886 2.625 2.62486 2.625H9.62486C10.5909 2.625 11.3749 3.409 11.3749 4.375V5.25H0.874857ZM7.87511 4.375H1.75011V3.5H7.87511V4.375ZM8.74989 4.375H9.62489V3.5H8.74989V4.375Z"
      />
      <Accordion 
        accordionTitle="Operate Unique Shop" 
        accordionText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris niesi ut aliquip ex ea commodo consequat.sed do eiusmod tempor incididunt ut exercitation ullamco laboris quis  labore et doliore magna aliqua. 4" 
        accordionIcon="M7.87848 2.6775V0H8.75261V2.67838C8.46211 2.63638 8.16811 2.63637 7.87848 2.6775ZM10.1906 3.30051C10.287 3.37256 10.3835 3.4447 10.4712 3.5324C10.5577 3.61892 10.6287 3.71385 10.6997 3.80885L10.7345 3.85528L13.1268 1.46302L12.5432 0.878525L10.1509 3.27078L10.1906 3.30051ZM11.3251 5.25085C11.3671 5.54135 11.3671 5.83448 11.326 6.12498H14.0026V5.25085H11.3251ZM5.92163 3.80179C5.99124 3.70923 6.06101 3.61646 6.14508 3.5324C6.2264 3.45108 6.31515 3.38405 6.40394 3.31698L6.40402 3.31692L6.40405 3.31689L6.40409 3.31687C6.42511 3.30099 6.44614 3.2851 6.46708 3.26903L4.07658 0.878525L3.49208 1.46302L5.88258 3.85353L5.92163 3.80179ZM5.29021 6.12498H2.62759V5.25085H5.29196C5.24909 5.54135 5.24909 5.83448 5.29021 6.12498ZM6.46687 8.12242C6.35654 8.04083 6.2455 7.95872 6.14512 7.85834C6.03836 7.75158 5.95227 7.63362 5.86548 7.51472L5.86338 7.51184L0 13.3743L0.62825 14.0026L4.14663 10.4842L6.49075 8.14009L6.46687 8.12242ZM8.75159 8.71155V11.3759H7.87747V8.7133C8.16797 8.75442 8.46197 8.75442 8.75159 8.71155ZM10.6928 7.591C10.6239 7.68262 10.5549 7.77439 10.471 7.85836C10.3876 7.94169 10.2956 8.01072 10.2038 8.0796C10.1866 8.09246 10.1695 8.1053 10.1525 8.11824L12.543 10.5087L13.1266 9.92424L10.7361 7.53374C10.7216 7.55277 10.7072 7.57188 10.6928 7.591Z"
      />
      </AccordionsWrapper>
    </RightWrapper>
  </ShowYourWorkWrapper>
)

export default ShowYourWork