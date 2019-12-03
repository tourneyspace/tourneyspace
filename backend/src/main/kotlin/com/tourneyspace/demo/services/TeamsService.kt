package com.tourneyspace.demo.services

import com.tourneyspace.demo.domains.Team
import org.springframework.stereotype.Service
import java.util.*


@Service
class TeamsService {
    companion object {
        private val teams: MutableList<Team> = ArrayList()

        init {
            teams.add(Team("Grizzlies", "Nilz"))
        }
    }
    fun findAll(): List<Team> {
        return teams
    }
}