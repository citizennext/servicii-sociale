import React from 'react'

import styled from 'styled-components'
const Logos = styled.div``
const Icon = styled.a`
	color: #666;
	margin: 0 10px 0 0;
	text-align: center;
	border: none;
	&:hover {
		color: #7db9e8;
		border: none;
	}
`
const SocialMedia = styled.div`@media (max-width: 767px) {width: 20vw;}`
const FooterBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-content: center;
	align-items: center;
	width: 80vw;
	height: 75px;
	padding: 0 10vw;
	background-color: #eee;
	border-top: 1px solid rgba(0, 0, 0, .05);
	@media (max-width: 767px) {
		padding: 0;
		width: 100vw;
	}
`
const Footer = props =>
	<FooterBox className="footer">
		<Logos />
		<SocialMedia>
			<Icon
				href="https://twitter.com/civictechro"
				target="_blank"
				rel="noopener noreferrer"
				title="twitter"
			>
				<i className="icon-twitter" />
			</Icon>
			<Icon
				href="https://www.facebook.com/civictech-romania"
				target="_blank"
				rel="noopener noreferrer"
				title="facebook"
			>
				<i className="icon-facebook" />
			</Icon>
			<Icon
				href="https://github.com/civictechro/servicii-sociale"
				target="_blank"
				rel="noopener noreferrer"
				title="github"
			>
				<i className="icon-github-circled" />
			</Icon>
		</SocialMedia>
	</FooterBox>
export default Footer
