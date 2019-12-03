package com.tourneyspace.demo.controller

import com.tourneyspace.demo.domains.Team
import com.tourneyspace.demo.services.TeamsService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController


@RestController
class TeamController(private val teamsService: TeamsService) {

    @GetMapping("/teams")
    fun getAllCourses(@PathVariable username: String?): List<Team?>? {
        return teamsService.findAll()
    }

}