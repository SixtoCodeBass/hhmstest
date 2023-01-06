package com.hhms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.hhms.entity.Employee;

@Repository
public interface EmployeeRepository extends BaseRepository<Employee, Long> {
	
	List<Employee> findByPunchNumber(String punchNumber);
	
	@Query(value="SELECT e FROM Employee e WHERE e.punchNumber = :punchNumber")
	List<Employee> search(@Param("punchNumber") String punchNumber);
	
	@Query(value= "SELECT * from employee WHERE punch_number = :punchNumber AND state='A'",
			nativeQuery = true )
	List<Employee> searchNativo(@Param("punchNumber") String punchNumber);
	
	@Query(value= "SELECT * from employee WHERE punch_number = :punchNumber AND state='A'",
			nativeQuery = true )
	Employee searchNByPunchNumber(@Param("punchNumber") String punchNumber);
}
