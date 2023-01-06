package com.hhms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hhms.entity.Employee;
import com.hhms.entity.Login;
import com.hhms.service.EmployeeServiceImpl;

@RestController
@CrossOrigin(origins="")
@RequestMapping("/v1/employee")
public class EmployeeController extends BaseControllerImpl<Employee, EmployeeServiceImpl> {
	
	@Autowired 
	private EmployeeServiceImpl employeeServiceImpl;
	
	@GetMapping("/search")
	public ResponseEntity<?> search(@RequestParam String punchNumber){
		try {
			return ResponseEntity.status(HttpStatus.OK).body(employeeServiceImpl.search(punchNumber));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\":\"" + e.getMessage() + "\"}");
		}
	}
	
	@PostMapping("/search2")
	@ResponseBody
	public ResponseEntity<?> search2(@RequestBody Login filter){
		try {
			String v = filter.getPunchNumber();
			return ResponseEntity.status(HttpStatus.OK).body(employeeServiceImpl.search(v));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\":\"" + e.getMessage() + "\"}");
		}
	}
	
	/*@PostMapping("/login")
	@ResponseBody
	public ResponseEntity<?> softLogin(@RequestBody Login request){
		try {
			String punchNumber = request.getPunchNumber();
			return ResponseEntity.status(HttpStatus.OK).body(employeeServiceImpl.search(punchNumber));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\":\"" + e.getMessage() + "\"}");
		}
	}*/
	
	
/*	@GetMapping("")
	public ResponseEntity<?> getAll() {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(employeeServiceImpl.findAll());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\":\"Try again please.\"}");
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getOne(@PathVariable Long id) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(employeeServiceImpl.findById(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\":\"Try again please.\"}");
		}
	}
	
	@PostMapping("")
	public ResponseEntity<?> save(@RequestBody Employee entity) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(employeeServiceImpl.save(entity));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\":\"Try again please.\"}");
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Employee entity) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(employeeServiceImpl.update(id, entity));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\":\"Try again please.\"}");
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable Long id) {
		try {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(employeeServiceImpl.delete(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\":\"Try again please.\"}");
		}
	}*/
	
}
