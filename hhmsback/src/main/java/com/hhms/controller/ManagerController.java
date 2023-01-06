package com.hhms.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hhms.entity.Manager;
import com.hhms.service.ManagerServiceImpl;

@RestController
@CrossOrigin(origins="")
@RequestMapping("/v1/manager")
public class ManagerController extends BaseControllerImpl<Manager, ManagerServiceImpl> {

	@Autowired 
	private ManagerServiceImpl managerServiceImpl;
	
	/*@PostMapping("/login")
	@ResponseBody
	public ResponseEntity<?> hardLogin(@RequestBody Login request){
		try {
			String username = request.getUserName();
			String password = request.getPassword();
			return ResponseEntity.status(HttpStatus.OK).body(managerServiceImpl.validateManager(username, password));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\":\"" + e.getMessage() + "\"}");
		}
	}*/

	@PostMapping("/registration")
	public ResponseEntity<?> register(@RequestBody Manager manager) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(managerServiceImpl.register(manager));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\":\"Try again please.\"}");
		}
	}

}
