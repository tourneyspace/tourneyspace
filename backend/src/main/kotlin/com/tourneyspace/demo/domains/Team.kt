package com.tourneyspace.demo.domains

data class Team(
        var teamId : String,
        var name: String
)

interface TeamRepository {
    fun getAllTeams(): List<Team>
    fun findByTeamId(teamId: String): Team
    fun createTeam(teamToCreate: Team)
}