package com.hhms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hhms.entity.AuthenticationReq;
import com.hhms.entity.MessageResponse;
import com.hhms.entity.TokenInfo;
import com.hhms.service.JwtUtilService;
import com.hhms.service.ManagerServiceImpl;

@RestController
@RequestMapping("")
public class EmployeeLoginController {

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	UserDetailsService usuarioDetailsService;

	@Autowired
	private JwtUtilService jwtUtilService;
	
	@Autowired
	private ManagerServiceImpl managerServiceImpl;
	
	@PostMapping("/public/employeelogin")
	public ResponseEntity<?> authenticate(@RequestBody AuthenticationReq authenticationReq) {
		try {
			authenticationManager.authenticate( new UsernamePasswordAuthenticationToken(
					authenticationReq.getUsername(), authenticationReq.getPassword()));
	
			final UserDetails userDetails =  
					usuarioDetailsService.loadUserByUsername(authenticationReq.getUsername());
	
			//Validate the user owns to employee
			if (managerServiceImpl.existsInEmpMan(userDetails.getUsername()) != 1 ) {
				//return null;
				return ResponseEntity
						.badRequest()
						.body( new MessageResponse("Error: Wrong punch number"));
			}
			
			final String jwt = jwtUtilService.generateToken(userDetails);
	
			TokenInfo tokenInfo = new TokenInfo(jwt);
	
			return ResponseEntity.ok(tokenInfo);
		} catch (Exception e) {
			//e.printStackTrace();
			return ResponseEntity
					.badRequest()
					.body( new MessageResponse("Error: Wrong punch number"));
		}
	}
	
}
