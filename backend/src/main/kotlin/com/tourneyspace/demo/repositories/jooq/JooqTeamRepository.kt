package com.tourneyspace.demo.repositories.jooq

import com.tourneyspace.demo.domains.Team
import com.tourneyspace.demo.domains.TeamRepository
import com.tourneyspace.jooq.generated.Tables.TEAM
import com.tourneyspace.jooq.generated.tables.records.TeamRecord
import org.jooq.DSLContext
import org.springframework.stereotype.Repository
import java.util.*

@Repository
class JooqTeamRepository(val jooq: DSLContext) : TeamRepository {

    override fun createTeam(teamToCreate: Team) {
        val teamId = UUID.randomUUID().toString().replace("-", "")
        jooq.insertInto(TEAM)
                .set(TEAM.TEAMID, teamId)
                .set(TEAM.NAME, teamToCreate.name)
                .execute()
        (jooq.selectFrom(TEAM).where(TEAM.TEAMID.eq(teamId)).fetchOne()).asTeam();
    }

    override fun deleteTeam(team: Team) {
        jooq.executeDelete(team.asRecord())
    }

    /**
     * This function selects all products from the product-table
     */
    override fun getAllTeams() =
            jooq.selectFrom(TEAM).map { it.asTeam() }

    /**
     * This function gets the product with the corresponding id
     */
    override fun findByTeamId(teamId: String): Team = jooq.selectFrom(TEAM)
            .where(TEAM.TEAMID.eq(teamId)).fetchOne().asTeam()

    /**
     * This function converts a ProductRecord to a Product-Object
     */
    private fun TeamRecord.asTeam(): Team =
            Team(teamid, name)

    /**
     * This function converts a Product-Object to a ProductRecord
     */
    private fun Team.asRecord(): TeamRecord =
            TeamRecord(teamId, name)

}