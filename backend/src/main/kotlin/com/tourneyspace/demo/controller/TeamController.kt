package com.tourneyspace.demo.controller

import com.tourneyspace.demo.domains.Team
import com.tourneyspace.demo.domains.TeamRepository
import com.tourneyspace.demo.services.TeamsService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@CrossOrigin(origins =  ["http://localhost:3000"])
@RestController
class TeamController(private val teamsService: TeamsService, private val teamRepository: TeamRepository) {

    @GetMapping("/teams")
    fun getAllCourses(@PathVariable username: String?): List<Team?>? {
        return(teamRepository.getAllTeams())
    }

}