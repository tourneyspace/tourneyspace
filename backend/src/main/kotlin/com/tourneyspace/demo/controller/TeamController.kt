package com.tourneyspace.demo.controller

import com.tourneyspace.demo.domains.Team
import com.tourneyspace.demo.domains.TeamRepository
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["http://localhost:3000"])
@RestController
class TeamController(private val teamRepository: TeamRepository) {

    @GetMapping("/teams")
    fun getAllTeams(): List<Team?>? {
        return (teamRepository.getAllTeams())
    }

    @PostMapping("/addTeam/{name}")
    fun createTeam(@PathVariable name: String) {
        val team = Team("", name)
        teamRepository.createTeam(team)
    }

    @DeleteMapping("/deleteTeam/{id}")
    fun deleteTeam(@PathVariable id: String) {
        val team = teamRepository.findByTeamId(id)
        teamRepository.deleteTeam(team)
    }
}