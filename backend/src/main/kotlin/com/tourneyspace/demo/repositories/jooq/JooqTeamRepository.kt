package com.tourneyspace.demo.repositories.jooq

import com.tourneyspace.demo.domains.Team
import com.tourneyspace.demo.domains.TeamRepository
import com.tourneyspace.jooq.generated.Tables.TEAM
import org.jooq.DSLContext
import org.springframework.stereotype.Repository
import java.util.*

@Repository
class JooqTeamRepository(val jooq: DSLContext) : TeamRepository {

    override fun createTeam(teamToCreate: Team) {
        val teamId = UUID.randomUUID().toString().replace("-", "")
        jooq.insertInto(TEAM)
                .set(PRODUCT.PRODUCTID, productId)
                .set(PRODUCT.PRODUCTTYPE, productToCreate.productType)
                .set(PRODUCT.PRODUCTNAME, productToCreate.productName)
                .execute()
        (jooq.selectFrom(PRODUCT).where(PRODUCT.PRODUCTID.eq(productId)).fetchOne()).asProduct()
    }

    override fun getAllTeams(): List<Team> {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}